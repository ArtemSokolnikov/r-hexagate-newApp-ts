import React, { memo } from 'react';
import { NodeProps } from 'react-flow-renderer';

const FundNode: React.FC<NodeProps> = ({ data }) => {
    const { label, color, selected } = data;

    return (
        <div
            style={{
                padding: 10,
                border: '1px solid #999',
                borderRadius: 10,
                background: color,
            }}
        >
            {label}
            {selected && <div style={{ fontSize: 10, marginTop: 5 }}>Selected</div>}
        </div>
    );
};

export default memo(FundNode);
