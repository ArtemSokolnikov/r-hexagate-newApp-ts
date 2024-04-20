"use client";

import { ChainAddress } from '@/app/types/chainAddress';
import { FundingResData } from '@/app/types/fundingRecord';


export const getFundingGraph = async (source: ChainAddress): Promise<FundingResData> => {
  const response = await fetch(`/api/v1/graph/${source.chainId}/${source.address}`);
  if (!response.ok) {
      throw new Error('Failed to fetch funding graph');
  }
  return response.json();
};
