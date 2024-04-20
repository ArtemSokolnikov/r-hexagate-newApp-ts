import React from 'react';
import { memo } from 'react';
import { EdgeProps } from 'react-flow-renderer';

const FundEdge: React.FC<EdgeProps> = ({ sourceX, sourceY, targetX, targetY }) => {
    return (
        <line
            x1={sourceX}
            y1={sourceY}
            x2={targetX}
            y2={targetY}
            strokeWidth={2}
            stroke="#ccc"
        />
    );
};

export default memo(FundEdge);
