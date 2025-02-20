import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[sprkCardContent]',
})
export class SprkCardContentDirective {
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  @HostBinding('class.sprk-c-Card__content') true;

  /**
   * @ignore
   */
  constructor() {}
}
