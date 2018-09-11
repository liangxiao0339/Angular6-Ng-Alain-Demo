import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';

@Component({
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  _inventoryModel: any[] = [];

  constructor(private _inventoryService: InventoryService) { }

  ngOnInit() {
    this._inventoryService.getSiderbarMenu()
      .subscribe(result => {
        console.log(result);
        this._inventoryModel = result;
      });
  }

}
