import { PropertyAccessor } from '@nivo/core';
import { InheritedColorConfig } from '@nivo/colors';
import { ComputedDatum, DatumId } from './types';
interface RadialLabelsLayerProps<RawDatum> {
    center: [number, number];
    data: ComputedDatum<RawDatum>[];
    label: PropertyAccessor<ComputedDatum<RawDatum>, DatumId>;
    skipAngle: number;
    skipRadius: number;
    radiusOffset: number;
    textColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    rotation: number;
}
export declare const RadialLabelsLayer: <RawDatum>({ center, data, label, skipAngle, skipRadius, radiusOffset, textColor, rotation: extraRotation, }: RadialLabelsLayerProps<RawDatum>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadialLabelsLayer.d.ts.map