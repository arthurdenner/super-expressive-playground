import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-playground-usage",
  template: `
    <ul class="list-disc">
      <li>
        Use
        <a
          class="text-primary hover:underline"
          href="https://github.com/francisrstokes/super-expressive"
          target="_blank"
        >
          SuperExpressive API
        </a>
        to write your
        <strong>Regular Expression</strong>
      </li>
      <li class="mt-2">
        Hover over a property/method to see its documentations
      </li>
      <li class="mt-2">
        Press
        <code>Ctrl + ⏎</code>
        to generate
        <strong>Regular Expression</strong>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundUsageComponent {}
