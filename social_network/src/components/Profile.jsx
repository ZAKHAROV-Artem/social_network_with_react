import s from "./../styles/Profile.module.css";

function Profile(props) {
	return <div className='content'>
		<div className={s.profile}>
			<div className={s.preview}>
				<div className={s.preview_info}>
				<div className={s.profile_photo}><img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset="" /></div>
				<div className={s.preview_title}>{props.name}</div>
				</div>
			</div>
			<div className={s.profile_container}>
				<div className={s.description}>Etiam facilisis odio id interdum tempus. Cras a posuere risus. Nulla pellentesque est vel arcu tincidunt sollicitudin. Sed ac porta nisl. <br/><br/>Vestibulum et elementum nulla. Etiam porta aliquam posuere. Vestibulum lobortis eu ex ac lobortis. Phasellus eu semper ante. Pellentesque ac ex ullamcorper, mollis lectus sed, vestibulum eros. Duis lacus odio, condimentum quis quam id, convallis feugiat ligula. Vivamus in nulla et magna consequat interdum. Nullam velit diam, rhoncus et mi nec, sagittis ultrices dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
				Aliquam ac felis vulputate, aliquam lorem non, auctor lectus. In hac habitasse platea dictumst. Vivamus iaculis non urna nec posuere.<br/><br/> Nam odio eros, rhoncus a magna sed, malesuada vestibulum metus.Sed scelerisque nisl mauris, vel consectetur nunc scelerisque at.  </div>
			</div>
		</div>
	</div>;
}
export default Profile;
