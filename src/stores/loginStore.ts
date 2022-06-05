import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable, runInAction, autorun, action} from 'mobx';
import {LoginManager} from 'react-native-fbsdk-next';
import {deleteAllRealm} from '../components/realmModels/allSchemas';
import {httpPost} from '../config/apiService';
import {loginURL, registerUserURL} from '../config/routesConstants';
import {asyncStorageSetItem} from '../helpers/cache/asyncStorageSetItem';
import {constructUrl} from '../helpers/constructUrl';
import {
  getAsyncStore,
  setAsyncStore,
} from '../helpers/cache/setAndGetAsyncStore';
import {underscoreManipulation} from '../helpers/underscoreLogic';
import {rootStore, RootStore} from './context';

export interface InitialDataProps {
  firstName: string;
  lastName: string;
  walletAddress: string;
  photo: string;
  username: string;
  password: string;
  desc: string;
  xmppPassword: string;
  xmppUsername: string;
}
export class LoginStore {
  isFetching: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string = '';
  initialData: InitialDataProps = {
    firstName: '',
    lastName: '',
    walletAddress: '',
    photo: '',
    username: '',
    password: '',
    desc: '',
    xmppPassword: '',
    xmppUsername: '',
  };
  userDescription: string = '';
  userAvatar: string = '';
  anotherUserAvatar: string = '';
  anotherUserDescription: string = '';
  anotherUserFirstname: string = 'Loading';
  anotherUserLastname: string = '...';
  anotherUserLastSeen: any = {};
  anotherUserWalletAddress: any = {};
  isPreviousUser: boolean = false;
  pushSubscriptionData: any = {
    ok: false,
    subscription_info: {
      appId: '',
      country: '',
      createdAt: null,
      deviceId: '',
      deviceType: null,
      environment: 'Development',
      expiresAt: null,
      externalId: '',
      id: null,
      isSubscribed: '0',
      jid: null,
      language: 'en',
      lat: '',
      long: '',
      screenName: null,
      timezone: 0,
      updatedAt: 0,
    },
  };
  skipForever: boolean = false;
  stores: RootStore|{} = {}
  userToken: string = '';
  refreshToken: string = '';
  walletAddress: string = '';
  xmppUsername: string = '';

  constructor(stores: RootStore) {
    makeAutoObservable(this);
    this.stores = stores;
  }
  setInitialState=()=>{
    runInAction(()=>{
      this.isFetching = false;
      this.loading = false;
      this.error = false;
      this.errorMessage = '';
      this.initialData = {
        firstName: '',
        lastName: '',
        walletAddress: '',
        photo: '',
        username: '',
        password: '',
        desc: '',
        xmppPassword: '',
        xmppUsername: '',
      };
      this.userDescription = '';
      this.userAvatar = '';
      this.anotherUserAvatar = '';
      this.anotherUserDescription = '';
      this.anotherUserFirstname = 'Loading';
      this.anotherUserLastname = '...';
      this.anotherUserLastSeen = {};
      this.anotherUserWalletAddress = {};
      this.isPreviousUser = false;
      this.pushSubscriptionData = {
        ok: false,
        subscription_info: {
          appId: '',
          country: '',
          createdAt: null,
          deviceId: '',
          deviceType: null,
          environment: 'Development',
          expiresAt: null,
          externalId: '',
          id: null,
          isSubscribed: '0',
          jid: null,
          language: 'en',
          lat: '',
          long: '',
          screenName: null,
          timezone: 0,
          updatedAt: 0,
        },
      };
      this.skipForever = false;
      this.userToken = '';
      this.refreshToken = '';
      this.walletAddress = '';
      this.xmppUsername = '';
    })

  }
 

  updateUserPhotoAndDescription(avatar: string, description: string) {
    runInAction(() => {
      this.userAvatar = avatar;
      this.userDescription = description;
    });
  }

  setOtherUserVcard(data: any) {
    this.anotherUserAvatar = data.anotherUserAvatar;
    this.anotherUserDescription = data.anotherUserDescription;
  }

  setOtherUserDetails(data: {
    anotherUserFirstname: string;
    anotherUserLastname: string;
    anotherUserLastSeen?: any;
    anotherUserWalletAddress?: string;
  }) {
    this.anotherUserFirstname = data.anotherUserFirstname;
    this.anotherUserLastname = data.anotherUserLastname;
    this.anotherUserLastSeen = data.anotherUserLastSeen;
    this.anotherUserWalletAddress = data.anotherUserWalletAddress;
  }

  async logOut() {
    runInAction(() => {
      this.isFetching = true;
    });
    try {
      LoginManager.logOut();
      try {
        await AsyncStorage.clear();
      } catch (e) {
        // console.log(e)
      }
      deleteAllRealm();
      rootStore.resetStore()
    } catch (error: any) {
      runInAction(() => {
        this.isFetching = false;
        this.error = true;
        this.errorMessage = error;
      });
    }
  }

  loginUser = async (
    loginType: any,
    authToken: any,
    password: any,
    ssoUserData: {photo: any},
  ) => {
    const token = this.stores.apiStore.defaultToken;
    let bodyData = {
      loginType: loginType,
      authToken: authToken,
    };
    // this.test()
    runInAction(() => {
      this.isFetching = true;
    });
    const url = this.stores.apiStore.defaultUrl + loginURL;
    try {
      const response: any = await httpPost(url, bodyData, token);
      if (response.data.success) {
        //save token in async storage
        // setAsyncStore(
        // 	response.data.token,
        // 	'userToken',
        // 	(callback: any) => {
        // 		console.log(callback,"loginasynccall")
        // 		runInAction(()=>{
        // 			this.loading = false;
        // 			this.userToken = callback;
        // 		})

        // 	}
        // )
        await asyncStorageSetItem('userToken', response.data.token);
        await asyncStorageSetItem('refreshToken', response.data.refreshToken);
        runInAction(() => {
          this.loading = false;
          this.userToken = response.data.token;
          this.refreshToken = response.data.refreshToken;
        });

        const photo = ssoUserData.photo;
        let {firstName, lastName, username, xmppPassword} = response.data.user;

        if (!lastName) {
          lastName = firstName.split(' ')[1];
          firstName = firstName.split(' ')[0];
        }

        const {walletAddress} = response.data.user.defaultWallet;
        const xmppUsername = underscoreManipulation(walletAddress);

        // save user login details received after login
        setAsyncStore(
          {
            firstName,
            lastName,
            walletAddress,
            photo,
            username,
            password,
            xmppPassword,
            xmppUsername,
          },
          'initialLoginData',
          (callback: any) => {
            runInAction(() => {
              this.initialData = callback;
              this.isFetching = false;
            });

            // this.initialData.firstName = callback.firstName;
            // this.initialData.lastName = callback.lastName;
            // this.initialData.walletAddress = callback.walletAddress;
            // this.initialData.photo = callback.photo;
            // this.initialData.username = callback.username;
            // this.initialData.password = callback.password;
            // this.initialData.xmppUsername = underscoreManipulation(walletAddress);
            // this.initialData.xmppPassword = callback.xmppPassword;
          },
        );
      } else {
        this.error = true;
        this.errorMessage = response.data.msg;
      }
    } catch (error: any) {
      this.error = true;
      this.errorMessage = error.response;
    }
  };

  setTokenFromAsyncStorage = async () => {
    runInAction(() => {
      this.loading = true;
    });
    // await AsyncStorage.getItem('userToken')
    // .then(action((data:any) => {
    // 	this.userToken = data;
    // 	this.loading = false;
    // }))ni
    getAsyncStore('userToken', userToken => {
      runInAction(()=>{
        this.userToken = userToken ? userToken : '';
        this.loading = false;
      })
    });

    getAsyncStore('refreshToken', refreshToken => {
      runInAction(() => {
        this.refreshToken = refreshToken ? refreshToken : '';
        this.loading = false;
      });
    });
  };

  setInitialDetailsFromAsyncStorage = async () => {
    this.isFetching = true;
    await AsyncStorage.getItem('initialLoginData').then(
      action((data: any) => {
        if (data) {
          this.initialData = JSON.parse(data);
        }
        this.isFetching = false;
      }),
    );
  };

  registerUser = async (body: any, ssoUserData: any) => {
    const token = this.stores.apiStore.defaultToken;
    try {
      const url = this.stores.apiStore.defaultUrl + registerUserURL;
      const response: any = await httpPost(url, body, token);
      if (response.data.success) {
        this.loginUser(
          body.loginType,
          body.authToken,
          body.password,
          ssoUserData,
        );
      } else {
        runInAction(() => {
          this.isFetching = false;
          this.error = true;
          this.errorMessage = response.data;
        });
      }
    } catch (error: any) {
      runInAction(() => {
        this.isFetching = false;
        this.error = true;
        this.errorMessage = error;
      });
    }
  };
}
