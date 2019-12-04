import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule

} from '@angular/material';


@NgModule ({
    imports:
    [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatDividerModule,
        MatPaginatorModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatDividerModule,
        MatPaginatorModule,
        MatCardModule,
        MatDialogModule
    ]

})

export class MaterialModule {}
