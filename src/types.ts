export interface GetcontactResponse {
  meta: Meta;
  result: Result;
}

export interface Meta {
  requestId: string;
  httpStatusCode: number;
}

export interface Result {
  tags: Tag[];
  deletedTags: any[];
  deletedTagCount: number;
  adSettings: AdSettings;
  subscriptionInfo: SubscriptionInfo;
  deletedTagRequestButton: string;
  verify: null;
}

export interface AdSettings {
  interstitial: Interstitial;
  native: Native;
}

export interface Interstitial {
  interval: number;
  providers: any[];
  locations: Locations;
  noFillInterval: number;
  searchCount: number;
  reducedInterval: number;
  hera: boolean;
}

export interface Locations {
  showTagsResult: boolean;
  showTagsResultDetail: boolean;
  manuelSearch: boolean;
  shareSearch: boolean;
  showTagsShare: boolean;
}

export interface Native {
  searchHistory: null;
  callHistory: null;
  searchDetail: null;
  callResult: null;
  notificationList: NotificationList[];
  newsFeed: null;
}

export interface NotificationList {
  mediation: string;
  unitId: string;
  status: boolean;
  video: boolean;
}

export interface SubscriptionInfo {
  isPro: boolean;
  proStats: boolean;
  proAds: boolean;
  proWho: boolean;
  proTelco: boolean;
  hasTariff: boolean;
  isTrialUsed: boolean;
  storeProductId: null;
  usage: Usage;
  premiumType: string;
  premiumTypeName: string;
  showTrustScoreUsage: boolean;
  showTagUsage: boolean;
  showSubscriptionInfo: boolean;
  isMainSubscriptionMenuActive: boolean;
  showSubscriptionPackages: boolean;
  showStatics: boolean;
  showWhoLookedMyProfile: boolean;
  renewDate: Date;
  receiptStartDate: Date;
  receiptEndDate: Date;
  lastPackageText: null;
  subsInfoButtonText: string;
  subsInfoButtonIntroText: string;
}

export interface Usage {
  search: NumberDetail;
  numberDetail: NumberDetail;
  trustScore: NumberDetail;
}

export interface NumberDetail {
  limit: number;
  remainingCount: number;
  showOffer: boolean;
  isColorRed: boolean;
  showPackages: boolean;
  localizations: Localizations;
}

export interface Localizations {
  title: string;
  description: string;
  btnTitle: string;
}

export interface Tag {
  tag: string;
  count: number;
  isNew: boolean;
  removable: boolean;
  askReason: boolean;
}
