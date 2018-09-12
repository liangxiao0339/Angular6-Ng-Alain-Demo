import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../service/inventory.service';

@Component({
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  _inventoryModel: any[] = [];

  _isSerarch = false;
  _searchModel = {
    productName: null,
    warehousePosition: null,
    minInboundAmount: null,
    maxInboundAmount: null,
    outboundAmount: null,
    inventoryAmount: null
  };

  constructor(private _inventoryService: InventoryService) { }

  ngOnInit() {
    this._inventoryService.getSiderbarMenu()
      .subscribe(
        result => {
          this._inventoryModel = result;
        },
        error => {
          console.log(error);
        }
      );
  }

  clickSearch() {
    this._isSerarch = true;

    setTimeout(() => {

      // 仅用于测试，具体查询由后端完成
      if (this._searchModel.minInboundAmount !== null && this._searchModel.maxInboundAmount !== null) {

        const filterData = this._inventoryModel.filter(t =>
          t.inboundAmount > this._searchModel.minInboundAmount &&
          t.inboundAmount < this._searchModel.maxInboundAmount);

        this._inventoryModel = filterData;
      }

      this._isSerarch = false;
    }, 2000);
  }

}
