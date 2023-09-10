import Chip from '@mui/material/Chip';

export default function DashboardShortcut ({ customColor, customLabel }) {
  const handleClick = () => {
    // this is required to make the component change appearance when hovered and clicked on
  };

  return (
      <Chip
        color={customColor}
        sx={{
          width: '100%',
          height: 'auto',
          justifyContent: 'center',
          padding: '10px 0px 10px 0px',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'pre-wrap',
          },
        }}
        label={customLabel}
        onClick={handleClick}
      />
  );
}