import { customEdges, nodeTypes } from '@/app/components/charts/FlowChart.constants';
import { FC, memo } from 'react';
import ReactFlow, { useEdges, useNodes} from 'reactflow';

// const fitViewOptions: any = {
//     padding: 0.3,
// };

type FlowChartProps = {
    onLoad?: (params: any) => void;
    className?: string;
    preventScrolling?: boolean;
    children?: JSX.Element | JSX.Element[];
    nodes?: any;
    edges?: any;
};

const FlowChart: FC<FlowChartProps> = ({
    className,
    onLoad,
    children,
}) => {
    const nodes = useNodes();
    const edges = useEdges();

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onLoad={onLoad}
            snapToGrid
            snapGrid={[15, 15]}
            style={{ width: '100%', height: '100%' }}
            className={className}
            nodeTypes={nodeTypes}
            edgeTypes={customEdges}
            defaultEdgeOptions={{ zIndex: 0 }}
        >
            {children}
        </ReactFlow>
    );
};

export default memo(FlowChart);
