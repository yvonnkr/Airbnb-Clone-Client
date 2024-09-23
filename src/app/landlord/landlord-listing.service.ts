import {computed, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {State} from "../core/model/state.model";
import {CardListing, CreatedListing, NewListing} from "./model/listing.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LandlordListingService {

  http: HttpClient = inject(HttpClient);

  private create$: WritableSignal<State<CreatedListing>> = signal(State.Builder<CreatedListing>().forInit())
  createSig = computed(() => this.create$());

  private getAll$: WritableSignal<State<Array<CardListing>>> = signal(State.Builder<Array<CardListing>>().forInit())
  getAllSig = computed(() => this.getAll$());

  private delete$: WritableSignal<State<string>> = signal(State.Builder<string>().forInit())
  deleteSig = computed(() => this.delete$());

  constructor() {

  }

  create(newListing: NewListing): void {
    const formData = new FormData();
    for (let i = 0; i < newListing.pictures.length; ++i) {
      formData.append("picture-" + i, newListing.pictures[i].file);
    }
    const clone = structuredClone(newListing);
    clone.pictures = [];
    formData.append("dto", JSON.stringify(clone));
    this.http.post<CreatedListing>(`${environment.API_URL}/landlord-listing/create`,
      formData).subscribe({
      next: listing => this.create$.set(State.Builder<CreatedListing>().forSuccess(listing)),
      error: err => this.create$.set(State.Builder<CreatedListing>().forError(err)),
    });
  }

  resetListingCreation(): void {
    this.create$.set(State.Builder<CreatedListing>().forInit())
  }


}
