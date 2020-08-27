import { Component } from '@angular/core';

@Component({
    selector:'warning-message',
    styles: [
        `p {
            background-color: #FFD700;
            padding: 2em;
            text-align: center;
            font-weight: bold;
        }`
    ],
    template:`
    <p>That's a warning!</p>
    `
})
export class WarningAlertComponent {
}