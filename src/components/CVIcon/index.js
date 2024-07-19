import propTypes from "prop-types";

export const CVIcon = ({ width, fontColor, iconColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="resize-svg"
    viewBox="0 0 60 60"
    width={width ?? `10rem`}
  >
    <g
      fill={fontColor ?? '#aba973'}
      data-name="container"
      transform="translate(6,6.4) scale(0.3903495536275618)"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M60.2 120.5c-15.9 0-28.2-12.3-38.1-22.2S0 76.2 0 60.2s12.3-28.2 22.2-38S44.3 0 60.2 0s28.2 12.3 38.1 22.2 22.2 22.2 22.2 38.1-12.3 28.1-22.2 38-22.1 22.2-38.1 22.2zm0-119.2c-15.4 0-26.9 11.6-37.1 21.8S1.3 44.9 1.3 60.2s11.6 27 21.8 37.2 21.8 21.8 37.1 21.8 26.9-11.6 37.1-21.8 21.8-21.8 21.8-37.1-11.5-27-21.7-37.2S75.6 1.3 60.2 1.3z"
      ></path>
      <path fill="transparent" d="M-3 -3H123.5V123.5H-3z" pointerEvents="all"></path>
      <path fill="transparent" d="M-6 -6H126.5V126.5H-6z" pointerEvents="all"></path>
    </g>
    <g fill={iconColor ?? '#d9b159'} data-name="icon" transform="translate(19.4,13.0) scale(0.2)">
      <path d="M83.332 4.168H16.668a6.948 6.948 0 00-6.945 6.945V88.89a6.948 6.948 0 006.945 6.946h66.668a6.948 6.948 0 006.945-6.946l-.004-77.78a6.948 6.948 0 00-6.945-6.946zm-37.5 34.723a2.786 2.786 0 01-2.777 2.777c-1.528 0-2.778-1.25-2.778-2.777s1.25-2.777 2.778-2.777a2.786 2.786 0 012.777 2.777zm0 20.832a2.786 2.786 0 01-2.777 2.777c-1.528 0-2.778-1.25-2.778-2.777s1.25-2.777 2.778-2.777a2.786 2.786 0 012.777 2.777zm6.945-23.613h27.777c.766 0 1.39.625 1.39 1.39s-.624 1.391-1.39 1.391H52.777c-.765 0-1.39-.625-1.39-1.39s.625-1.391 1.39-1.391zm-1.386-15.277c0-.766.625-1.39 1.39-1.39h12.5c.766 0 1.39.624 1.39 1.39s-.624 1.39-1.39 1.39h-12.5c-.765 0-1.39-.624-1.39-1.39zm1.386 19.445h12.5c.766 0 1.39.625 1.39 1.39s-.624 1.391-1.39 1.391h-12.5c-.765 0-1.39-.625-1.39-1.39s.625-1.391 1.39-1.391zm0 16.668h27.777c.766 0 1.39.625 1.39 1.39 0 .766-.624 1.391-1.39 1.391H52.777c-.765 0-1.39-.625-1.39-1.39 0-.766.625-1.391 1.39-1.391zm0 4.164h12.5c.766 0 1.39.625 1.39 1.39s-.624 1.391-1.39 1.391h-12.5c-.765 0-1.39-.625-1.39-1.39s.625-1.39 1.39-1.39zm0 16.668h27.777c.766 0 1.39.625 1.39 1.39s-.624 1.391-1.39 1.391H52.777c-.765 0-1.39-.625-1.39-1.39s.625-1.39 1.39-1.39zm0 4.168h12.5c.766 0 1.39.625 1.39 1.39 0 .766-.624 1.391-1.39 1.391h-12.5c-.765 0-1.39-.625-1.39-1.39 0-.766.625-1.39 1.39-1.39zm27.777-63.89H52.777c-.765 0-1.39-.626-1.39-1.391 0-.766.625-1.391 1.39-1.391h27.777c.766 0 1.39.625 1.39 1.39 0 .766-.624 1.391-1.39 1.391zm-34.723 0a2.786 2.786 0 01-2.777 2.776 2.786 2.786 0 01-2.777-2.777 2.786 2.786 0 012.777-2.777 2.786 2.786 0 012.777 2.777zm-4.164 75h-25a4.18 4.18 0 01-4.168-4.169V11.11a4.18 4.18 0 014.168-4.168h25v5.75c-2.39.625-4.168 2.777-4.168 5.36s1.777 4.734 4.168 5.359V33.52c-2.39.625-4.168 2.777-4.168 5.36 0 2.581 1.777 4.734 4.168 5.359v10.109c-2.39.625-4.168 2.777-4.168 5.36s1.777 4.734 4.168 5.359v10.109c-2.39.624-4.168 2.777-4.168 5.359s1.777 4.734 4.168 5.36zm-1.39-12.5a2.786 2.786 0 012.777-2.778 2.786 2.786 0 012.777 2.777 2.786 2.786 0 01-2.777 2.777 2.786 2.786 0 01-2.777-2.777z"></path>
      <path d="M30.555 16.668A5.556 5.556 0 1125 11.109a5.557 5.557 0 015.555 5.559M25 23.609c-4.598 0-8.332 3.734-8.332 8.332v4.168a4.18 4.18 0 004.168 4.168h8.332a4.18 4.18 0 004.168-4.168v-4.168c0-4.598-3.734-8.332-8.332-8.332zM29.168 44.445h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 48.609h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 52.777h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 56.945h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 69.445h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 73.609h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 77.777h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781zM29.168 81.945h-8.332a1.391 1.391 0 000 2.781h8.332a1.391 1.391 0 000-2.781z"></path>
      <path fill="transparent" d="M6.723 1.164H93.282V98.836H6.723z" pointerEvents="all"></path>
      <path fill="transparent" d="M3.723 -1.836H96.282V101.836H3.723z" pointerEvents="all"></path>
    </g>
    <g
      fill={fontColor ?? '#aba973'}
      data-name="business_name"
      transform="translate(14.0,28.0) scale(0.253242068977211)"
    >
      <path d="M12.16 34.72H6.88v12.12q0 .72-.52 1.24t-1.24.52q-.76 0-1.28-.52t-.52-1.24V18.8q0-.72.52-1.24t1.28-.52h7.04q1.84 0 3.46.7t2.82 1.9 1.9 2.8.7 3.44-.7 3.44-1.9 2.8-2.82 1.9-3.46.7zm0-14.16H6.88v10.6h5.28q1.08 0 2.06-.42t1.7-1.14 1.14-1.68.42-2.04-.42-2.06-1.14-1.7-1.7-1.14-2.06-.42zm19.96 27.96q-1.64 0-3.1-.62t-2.54-1.7-1.7-2.54-.62-3.1v-10.6q0-.76.52-1.28t1.28-.52q.72 0 1.24.52t.52 1.28v10.6q0 .92.34 1.72t.94 1.4 1.4.94 1.72.34q.88 0 1.68-.34t1.4-.94.96-1.4.36-1.72v-10.6q0-.76.52-1.28t1.24-.52 1.24.52.52 1.28v10.6q0 1.64-.62 3.1t-1.7 2.54-2.52 1.7-3.08.62zm17.16-19.36q.64-.56 1.42-.86t1.58-.3q1.96 0 3.22.96t1.94 2.76q.16.4.12.84t-.26.8-.6.58-.9.22q-.44 0-.78-.2t-.58-.48q-.2-.24-.34-.5t-.3-.54q-.28-.44-.62-.72t-1.14-.2q-.52.04-1 .32t-.84.68-.58.9-.22 1.02v12.4q0 .72-.52 1.24t-1.24.52q-.76 0-1.28-.52t-.52-1.24V29.76q0-.72.52-1.24t1.28-.52q.56 0 1 .32t.64.84zm15.68.04Q66.84 28 69 28q1.52 0 2.88.58t2.38 1.6 1.6 2.38.58 2.88v11.4q0 .72-.52 1.24t-1.24.52q-.76 0-1.28-.52t-.52-1.24v-11.4q0-.8-.3-1.5t-.84-1.24-1.24-.84-1.5-.3-1.52.3-1.24.84-.82 1.24-.3 1.5q0 .12-.08.36v11.04q0 .72-.52 1.24t-1.24.52q-.76 0-1.28-.52t-.52-1.24V29.52q0-.76.52-1.28t1.28-.52q1.44 0 1.68 1.48zm34.32 19.4q-.76 0-1.28-.52t-.52-1.24v-.76q-1.4 1.2-3.12 1.86t-3.6.66q-2.12 0-4-.82t-3.28-2.22-2.22-3.26-.82-3.98.82-4 2.22-3.28 3.28-2.22 4-.82q1.88 0 3.6.66t3.12 1.86v-.76q0-.72.52-1.24t1.28-.52q.72 0 1.24.52t.52 1.24v17.08q0 .72-.52 1.24t-1.24.52zm-8.52-17.04q-1.4 0-2.62.54T86 33.56t-1.46 2.14-.54 2.62.54 2.62T86 43.08t2.14 1.44 2.62.52 2.62-.52 2.14-1.44 1.44-2.14.52-2.62-.52-2.62-1.44-2.14-2.14-1.46-2.62-.54zm17.16 17.04q-.96 0-1.66-.7t-.7-1.66q0-1 .68-1.66t1.68-.66 1.68.66.68 1.66q0 .96-.7 1.66t-1.66.7zm9.92 0q-1.08 0-2.04-.42t-1.66-1.12-1.12-1.66-.42-2.04q0-.76.52-1.26t1.24-.5q.76 0 1.28.5t.52 1.26q0 .68.5 1.18t1.18.5q.72 0 1.22-.5t.5-1.18V18.8q0-.72.5-1.24t1.26-.52q.72 0 1.24.52t.52 1.24v24.56q0 1.08-.4 2.04t-1.12 1.66-1.68 1.12-2.04.42z"></path>
      <path fill="transparent" d="M0.32 14.04H126.08V51.6H0.32z" pointerEvents="all"></path>
      <path
        fill="transparent"
        d="M-2.68 11.04H129.07999999999998V54.6H-2.68z"
        pointerEvents="all"
      ></path>
    </g>
  </svg>
);

CVIcon.propTypes = {
  width: propTypes.string,
  fontColor: propTypes.string,
  iconColor: propTypes.string,
}