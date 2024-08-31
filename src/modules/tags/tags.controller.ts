import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
        constructor(public _tagService:TagsService){}

        @Get()
        getTags(): string[] {
                return this._tagService.getTags();
        }
        @Post()
        addTag(@Body() tagName: string): void {
                this._tagService.addTag(tagName);
        }
        @Delete(':tagName')
        deleteTag(@Body() tagName: string): void {
                this._tagService.deleteTag(tagName);
        }
}
