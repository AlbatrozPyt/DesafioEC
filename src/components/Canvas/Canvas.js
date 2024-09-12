import { Rect, Text } from "react-konva"

// Testando o canvas
export const Canvas = props => {
    return (
        <Text
            x={0}
            y={0}
            width={200}
            height={200}
            fill={'#444222'}
            text="React KonvaJs"
        />
    );
}