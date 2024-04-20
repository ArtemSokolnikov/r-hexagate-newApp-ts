'use client';
import React from 'react';
import { useFundsFlow } from '@/app/dashboard/hooks/useFundsFlow';
import { AddressType, ChainAddress, ChainIds } from '@/app/types/chainAddress';
import FlowChart from '../components/charts/FlowChart';

const sourceChainAddress: ChainAddress = {
    address: '0x39cd23328b5ba304ae70bb0c1866e224f727f962',
    chainId: ChainIds.EthereumMainnet,
    type: AddressType.EOA,
};

const Dashboard: React.FC = () => {
    const fundsFlow = useFundsFlow(sourceChainAddress);

    return (
        <div>
            <h1>Fund Flow Graph</h1>
            {fundsFlow.isLoading ? (
                <div>Loading...</div>
            ) : (
                <FlowChart nodes={fundsFlow.nodes} edges={fundsFlow.edges} />
            )}
        </div>
    );
};

export default Dashboard;
