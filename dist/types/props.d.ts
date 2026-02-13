import { ArcTransitionMode } from '@nivo/arcs';
import { OrdinalColorScaleConfig } from '@nivo/colors';
import { SunburstLayerId } from './types';
export declare const defaultProps: {
    id: string;
    value: string;
    cornerRadius: number;
    innerRadius: number;
    renderRootNode: boolean;
    layers: SunburstLayerId[];
    colors: OrdinalColorScaleConfig;
    colorBy: "id";
    inheritColorFromParent: boolean;
    childColor: {
        from: string;
    };
    borderWidth: number;
    borderColor: string;
    enableArcLabels: boolean;
    enableRadialLabels: boolean;
    radialLabel: string;
    radialLabelsRadiusOffset: number;
    radialLabelsSkipAngle: number;
    radialLabelsSkipRadius: number;
    radialLabelsRotation: number;
    radialLabelsTextColor: {
        theme: string;
    };
    arcLabel: string;
    arcLabelsRadiusOffset: number;
    arcLabelsSkipAngle: number;
    arcLabelsSkipRadius: number;
    arcLabelsTextColor: {
        theme: string;
    };
    animate: boolean;
    motionConfig: string;
    transitionMode: ArcTransitionMode;
    isInteractive: boolean;
    defs: never[];
    fill: never[];
    tooltip: <RawDatum>({ id, formattedValue, color, }: import("./types").ComputedDatum<RawDatum>) => import("react/jsx-runtime").JSX.Element;
    role: string;
};
//# sourceMappingURL=props.d.ts.map