
interface Playable{
    play(): void;
    pause(): void;
    stop(): void;
}

// Implementação em classes diferentes
class MusicPlayer implements Playable {
    play(): void {
        console.log("Tocando música!");
    }

    pause():void {
        console.log("Música pausada! ");
    }

    stop():void {
        console.log("Música parada!");
    }
}

class VídeoPlayer implements Playable{

    play(): void {
        console.log("Reproduzindo vídeo!")
    }

    pause(): void {
        console.log("Vídeo pausado!")
    }

    stop(): void {
        console.log("Vídeo parado!")   
    }
}

const players: Playable[] 
    = [new MusicPlayer, new VídeoPlayer()]
    players.forEach(player => player.play()) // cada um executa seu próprio play()
