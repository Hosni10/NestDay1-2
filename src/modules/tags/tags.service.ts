import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
    constructor(){}
    tags : string[] = [ "Node.js", "JS" , "HTML" , "CSS" , "Nest.js"];
    getTags(){
        return this.tags ;
    }

    addTag(tagName:string){
        return this.tags.push(tagName); 
    }
    deleteTag(tagName:string){
        const index = this.tags.indexOf(tagName);
        if (index > -1) {
            this.tags.splice(index, 1);
        } else {
            throw new Error('Tag not found');
        }
        return this.tags.pop() ;
    }
    updateTag(){
        return "update a tag" ;
    }


}
