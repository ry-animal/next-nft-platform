import { Prisma } from "@prisma/client";

export interface Order {
  created_date: string;
  closing_date: string;
  listing_time: number;
  expiration_time: number;
  order_hash: string;
  protocol_data: ProtocolData;
  protocol_address: string;
  current_price: string;
  maker: Maker;
  taker: any;
  maker_fees: MakerFee[];
  taker_fees: any[];
  side: string;
  order_type: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  remaining_quantity: number;
  relay_id: string;
  criteria_proof: any;
  maker_asset_bundle: AssetBundle;
  taker_asset_bundle: AssetBundle;
}

export interface ProtocolData {
  parameters: Parameters;
  signature: any;
}

export interface Parameters {
  offerer: string;
  offer: Offer[];
  consideration: Consideration[];
  startTime: string;
  endTime: string;
  orderType: number;
  zone: string;
  zoneHash: string;
  salt: string;
  conduitKey: string;
  totalOriginalConsiderationItems: number;
  counter: number;
}

export interface Offer {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
}

export interface Consideration {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
  recipient: string;
}

export interface Maker {
  user: any;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface MakerFee {
  account: Account;
  basis_points: string;
}

export interface Account {
  user: any;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface AssetBundle {
  assets: Asset[];
  maker: any;
  slug: any;
  name: any;
  description: any;
  external_link: any;
  asset_contract: any;
  permalink: any;
  seaport_sell_orders: any;
}

export interface Asset {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: any;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: any;
  animation_original_url: any;
  name: string;
  description: string;
  external_link: any;
  asset_contract: AssetContract;
  permalink: string;
  collection: Collection;
  decimals: any;
  token_metadata: string;
  is_nsfw: boolean;
  owner: any;
}

export interface AssetContract {
  address: string;
  asset_contract_type: string;
  chain_identifier: string;
  created_date: string;
  name: string;
  nft_version: string;
  opensea_version: any;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: string;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string;
}

export interface Collection {
  banner_image_url: string;
  chat_url: any;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: any;
  display_data: DisplayData;
  external_url: string;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username: any;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: number;
  payout_address: string;
  require_email: boolean;
  short_description: any;
  slug: string;
  telegram_url: any;
  twitter_username: any;
  instagram_username: any;
  wiki_url: any;
  is_nsfw: boolean;
  fees: Fees;
  is_rarity_enabled: boolean;
  is_creator_fees_enforced: boolean;
}

export interface DisplayData {
  card_display_style: string;
  images: any;
}

export interface Fees {
  seller_fees: any;
  opensea_fees: any;
}

export type Nft = {
  id?: string;
  identifier?: string;
  metaDataUrl: string;
  title: string;
  description: string;
  metaData: Prisma.JsonValue;
  collectionId?: string;
  tokenId: string;
  owner: string;
  price: string;
  isListed: boolean;
  status?: string;
  history?: Prisma.JsonValue;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  thumb?: string;
  collection: NFTCollection;
};

export type NFTCollection = {
  id?: string;
  status?: string;
  title: string;
  description: string;
  metaData: Prisma.JsonValue;
  contractAddress: string | null;
  saleContract?: string | null;
  tokenCount?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  thumb?: string | null;
  creator?: string | null;
  blockchain?: string | null;
  creatorRoyalty?: string | null;
};
