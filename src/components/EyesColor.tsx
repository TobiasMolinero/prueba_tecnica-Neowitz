
import { getEyesColor } from "@/utils/helpers"

interface EyesColorProps{
    colors: string
}

export default function EyesColor({ colors }: EyesColorProps){

    const eyesColors: string[] = getEyesColor(colors); 
    let firstColor: string = eyesColors[0].trim() || '';
    let twoColors: boolean = false;

    const colorMap: { [key: string]: string } = {
        'hazel': '#b08d57',
        'blue-gray': '#6b7a8f',
        'blue': '#0000ff',
        'red': '#ff0000',
        'yellow': '#ffff00',
        'green': '#008000',
        'brown': '#a52a2a',
        'pink': '#ffc0cb',
        'gold': '#ffd700',
        'black': '#000',
        'white': '#fff',
        'orange': '#ffa500'
    };

    let colorStyle: string;

    if(eyesColors.length > 1){
        twoColors = true;
        colorStyle = `linear-gradient(
            to right,
            ${firstColor} 50%,
            ${eyesColors[1].trim()} 50%
        )`
    } else {
        colorStyle = colorMap[firstColor];
    }


    // if(twoColors){
    //     firstColor = eyesColors[0].trim();
    //     secondColor = eyesColors[1].trim();
    // } else {
    //     firstColor = eyesColors[0].trim();
    //     secondColor = '';
    // }


    // console.log(firstColor)
    // console.log(secondColor)

    return (
        <span style={twoColors ? {backgroundImage: colorStyle} : {background: colorStyle}} className={`flex justify-center items-center w-[22px] h-[22px] ${firstColor === 'unknown' ? '' : 'border border-white shadow-[2px_2px_2px_#000]'}`}>{firstColor === 'unknown' ? 'N/D' : ''}</span>
    );
}