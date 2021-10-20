import { Component } from '@angular/core';
@Component({
    selector: 'app-parent',
    templateUrl: 'C:\Users\HP\HTML\Angular\my-app\src\app\Components\parentcomponent.html',
    styleUrls: ['C:\Users\HP\HTML\Angular\my-app\src\app\Components\parentcomponent.css'],
})
export class ParentComponent{
    parent: string = 'Parent works using url';
    fruits: string[] = ['carrot'],
    userlist = []
}
