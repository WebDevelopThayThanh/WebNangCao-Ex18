// import { Component, signal } from '@angular/core';
// import { Product } from '../classes/IProduct';
// import { ProductHttpHandleErrorService } from '../product-http-handle-error-service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-product-detail-component',
//   standalone: false,
//   templateUrl: './product-detail-component.html',
//   styleUrl: './product-detail-component.css',
// })
// export class ProductDetailComponent {
//   product = signal<Product | null>(null);
//   errMessage = signal<any>('');

//   constructor(
//     private _service: ProductHttpHandleErrorService,
//     private router: Router,
//     private activateRoute: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.activateRoute.paramMap.subscribe((param) => {
//       let idParam = param.get('id');
//       if (idParam != null) {
//         let id = parseInt(idParam);
//         this._service.getProductById(id).subscribe({
//           next: (data) => {
//             this.product.set(data ?? null);
//           },
//           error: (err) => {
//             this.errMessage.set(err ? err.toString() : '');
//           },
//         });
//       }
//     });
//   }
// }