import {Ref, ref} from 'vue';
import Character from '../interfaces/character';

class CharacterServices{
    private character: Ref<Character>;
    private characters: Ref<Array<Character>>;

    constructor (){
        this.character = ref<Character>({});
        this.characters = ref<Array<Character>>([]);
    }
    getCharacter():Ref<Character>{
        return this.character
    }
    getCharacters():Ref<Array<Character>>{
        return this.characters
    }

    async fetchAll(): Promise<void>{
        try {
            const url = "https://rickandmortyapi.com/api/character";
            const res = await fetch(url);
            const json = await res.json();
            this.characters.value = await json.results;
    
        } catch (e) {
            console.log('no consumio', e);
        }
    };
    async fetchById(id: any): Promise<void>{
        try {
            const url = `https://rickandmortyapi.com/api/character/${id}`;
            const res = await fetch(url);
            const json = await res.json();

            this.character.value = await json
        } catch (error) {
            console.log("no consumio", error);
        }
    }
}

export default CharacterServices;