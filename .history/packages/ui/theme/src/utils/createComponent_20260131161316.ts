import type {Theme, ThemeOptions} from '@mui/material/styles'

export function createComponents(theme: Theme): ThemeOptions['components'] {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontWeight: 500,
        },
      },
    },
    MuiButton: OverrideButton(theme),
    MuiAutocomplete: OverrideAutocomplete(),
    MuiBreadcrumbs: OverrideBreadcrumbs(),
    MuiBadge: OverrideBadge(theme),
    MuiCardContent: OverrideCardContent(),
    MuiCheckbox: OverrideCheckbox(theme),
    MuiChip: OverrideChip(theme),
    MuiFormControlLabel: OverrideFormControlLabel(theme),
    MuiFormHelperText: OverrideFormHelperText(theme),
    MuiIcon: OverrideIcon(theme),
    MuiIconButton: OverrideIconButton(theme),
    MuiFormLabel: OverrideFormLabel(),
    MuiInputLabel: OverrideInputLabel(theme),
    MuiLinearProgress: OverrideLinearProgress(theme),
    MuiLink: OverrideLink(),
    MuiListItemIcon: OverrideListItemIcon(),
    MuiMenuItem: OverrideMenuItem(),
    MuiSelect: OverrideMuiSelect(),
    MuiOutlinedInput: OverrideOutlinedInput(theme),
    MuiPagination: OverridePagination(theme),
    MuiPaper: OverridePaper(),
    MuiRadio: OverrideRadio(theme),
    MuiStep: OverrideStepper(),
    MuiSwitch: OverrideSwitch(theme),
    MuiTab: OverrideTab(theme),
    MuiTableCell: OverrideTableCell(theme),
    MuiTableHead: OverrideTableHead(theme),
    MuiTablePagination: OverrideTablePagination(theme),
    MuiTableRow: OverrideTableRow(theme),
    MuiTabs: OverrideTabs(theme),
    MuiTextField: OverrideTextField(),
  }
}
