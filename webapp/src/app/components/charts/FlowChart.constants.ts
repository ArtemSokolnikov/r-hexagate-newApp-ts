

import { EdgeTypes, NodeTypes } from 'reactflow';
import FundEdge from './FundEdge';
import FundNode from './FundNode';


export const NODE_TYPES: NodeTypes = {
    FUND_NODE: FundNode,
};

export const EDGE_TYPES: EdgeTypes = {
    FUND_EDGE: FundEdge,
};
export const nodeTypes: NodeTypes = {
    [String(NODE_TYPES.FUND_NODE)]: FundNode,
};

export const customEdges: EdgeTypes = {
    [String(EDGE_TYPES.FUND_EDGE)]: FundEdge,
};
