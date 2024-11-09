import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Symbol from "./Symbol";
import Dropzone from "./Dropzone";
import { useEffect, useState } from "react";

const Symbols = () => {
    const [x, setX] = useState<{ value: number, img: string } | undefined>();
    const [y, setY] = useState<{ value: number, img: string } | undefined>();
    const [z, setZ] = useState<{ value: number, img: string } | undefined>();
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [zValue, setZValue] = useState(0);
    const handleDragEnd = (event: DragEndEvent) => {
        console.log(event);

        if (event.over) {
            if (event.over.id === "x") {
                setX({ value: event.active.id as number, img: event.active.data.current?.image });
            }
            if (event.over.id === "y") {
                setY({ value: event.active.id as number, img: event.active.data.current?.image });
            }
            if (event.over.id === "z") {
                setZ({ value: event.active.id as number, img: event.active.data.current?.image });
            }
        }
    }
    useEffect(() => {
        if (x && y && z) {
            setXValue(2 * Number(x.value) + 11);
        }
    }, [x, y, z]);

    useEffect(() => {
        if (x && y && z) {
            setYValue(Math.abs((2 * Number(z.value) + Number(y.value)) - 5));
        }
    }, [x, y, z]);

    useEffect(() => {
        if (x && y && z) {
            setZValue((Number(y.value) + Number(z.value)) - Number(x.value));
        }
    }, [x, y, z])

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <div className="container">
                    <div className="symbols">
                        <Symbol className="symbol" id="0" />
                        <Symbol className="symbol" id="11" />
                        <Symbol className="symbol" id="10" />
                        <Symbol className="symbol" id="22" />
                        <Symbol className="symbol" id="21" />
                        <Symbol className="symbol" id="20" />
                    </div>
                    <div className="droppable">
                        <div style={{ display: "flex", flexDirection: "column" }}><Dropzone id="x" className="symbol dropzone">{x && x.img && <img alt="x" className="image" src={x?.img} />}</Dropzone><span className="result">{xValue}</span></div>
                        <div style={{ display: "flex", flexDirection: "column" }}><Dropzone id="y" className="symbol dropzone">{y && y.img && <img alt="y" className="image" src={y?.img} />}</Dropzone><span className="result">{yValue}</span></div>
                        <div style={{ display: "flex", flexDirection: "column" }}><Dropzone id="z" className="symbol dropzone">{z && z.img && <img alt="z" className="image" src={z?.img} />}</Dropzone><span className="result">{zValue}</span></div>
                    </div>
                </div>
            </DndContext>
        </>
    );
}

export default Symbols;