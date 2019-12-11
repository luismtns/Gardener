import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'recuperar-senha', 
    loadChildren: './password-recovery/password-recovery.module#PasswordRecoveryPageModule' 
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'ladding', loadChildren: './ladding/ladding.module#LaddingPageModule' },
  { path: 'pack-raizes/:active', loadChildren: './pack-raizes/pack-raizes.module#PackRaizesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
