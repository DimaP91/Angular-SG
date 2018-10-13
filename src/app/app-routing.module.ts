import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule', canLoad: [AuthGuard], canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
