import { getEyesColor } from "@/utils/helpers"

interface EyesColorProps{
    colors: string
}

export default function EyesColor({ colors }: EyesColorProps){

    let twoColors: boolean;
    let firstColor: string;
    let secondColor: string;

    const eyesColors: string[] = getEyesColor(colors); 
    console.log(eyesColors)

    eyesColors.length > 1 ? twoColors = true : twoColors = false;

    if(twoColors){
        firstColor = eyesColors[0].trim();
        secondColor = eyesColors[1].trim();
    } else {
        firstColor = eyesColors[0].trim();
        secondColor = '';
    }
    
    firstColor === 'hazel' ? firstColor = '#b08d57' : null;
    firstColor === 'blue-gray' ? firstColor = '#6b7a8f' : null;

    secondColor === 'hazel' ? firstColor = '' : null;
    secondColor === 'blue-gray' ? firstColor = '#6b7a8f' : null;


    return <span className={`
                flex justify-center items-center w-[22px] h-[22px]
                ${firstColor === 'unknown' ? '' : 'border border-white shadow-[2px_2px_2px_#000]'}
                ${twoColors ? `bg-gradient-to-r from-[${firstColor}] from-50% to-[${secondColor}] to-50%` : `bg-[${firstColor}]`}

            `}>{firstColor === 'unknown' ? 'N/D' : ''}</span>
}