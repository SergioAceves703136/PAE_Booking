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
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule

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
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
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
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ]

})

export class MaterialModule {}
