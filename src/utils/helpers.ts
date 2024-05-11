export const getIdFromUrl = (url: string): string => {
    
    const segments = url.split('/');
    //El array quedaría asi: ['http:, '', 'swapi.dev', 'api', 'people' , '1', '']

    const lastSegment = segments[segments.length - 2] 
    //el numero para buscar al personaje siempre estará en el penultimo segmento. Si la url no tuviera '/' al final seria:
    // const lastSegment = segments[segments.length - 1].
    
    return lastSegment;
}