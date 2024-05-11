export const getIdFromUrl = (url: string): string => {
    
    const segments = url.split('/');
    const lastSegment = segments[segments.length - 2] //el numero para buscar al personaje siempre estará en el penultimo segmento.
    
    return lastSegment;
}