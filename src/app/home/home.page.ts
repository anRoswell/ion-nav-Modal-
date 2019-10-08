import { Component } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { DetailPage } from "../detail/detail.page"
import { OverlayEventDetail } from "@ionic/core"

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	constructor(private modalController: ModalController) {}

	async DetailPage() {
		console.log("Detail page")
		const modal = await this.modalController.create({
			component: DetailPage,
		})

		modal.onDidDismiss().then((detail: OverlayEventDetail) => {
			console.log(`The result: ${detail.data}`)
		})

		await modal.present()
	}
}
