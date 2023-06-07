import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:Vehicle[] = [];
  selectedVehicle!: Vehicle;

  constructor(private vehicleService:VehicleService,
    private messageService: MessageService){}

  onSelect(vehicle: Vehicle): void {
    this.messageService.add(`VehiclesComponent: onSelect(${vehicle.id})`)
    this.selectedVehicle = vehicle;
    
  }

  getVehicles(): void {
    this.vehicleService.getVehicle()
    .subscribe((vehicles) => {
      this.vehicles
    })
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
