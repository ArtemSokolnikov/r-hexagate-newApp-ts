
import { useQuery } from 'react-query';
import { getFundingGraph } from '@/app/api/funding';
import { ChainAddress } from '@/app/types/chainAddress';
import { Edge } from 'reactflow';


type FundsFlowData = {
    readonly isLoading?: boolean;
    readonly nodes: Node[];
    readonly edges: Edge[];
}

export const useFundsFlow = (sourceAddress: ChainAddress): FundsFlowData => {
    const { data, isLoading, isError } = useQuery(['fundsFlow', sourceAddress], () => getFundingGraph(sourceAddress));

    if (isError) {
        console.error('Failed to fetch funding graph');
    }

    if (!data) {
        return { isLoading: true, nodes: [], edges: [] };
    }

    return {
        isLoading,
        nodes: data.nodes.map((node: string) => ({ id: node, type: 'fundNode', data: { address: node } })),
        edges: data.edges.map((edge: Edge) => ({ ...edge, type: 'fundEdge' })),
    };
};
