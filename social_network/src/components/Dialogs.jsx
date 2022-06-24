import s from "./../styles/Dialogs.module.css";

function Dialogs(props) {
	return <div className='content'>
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				<ul>
                    <li>Artem</li>
                    <li>Vasya</li>
                    <li>Masha Chernushka</li>
                    <li>Sasha Belyi</li>
                    <li>Vasya</li>
                    <li>Masha Chernushka</li>
                    <li>Sasha Belyi</li>
                    <li>Vasya</li>
                    <li>Masha Chernushka</li>
                    <li>Sasha Belyi</li>
                </ul>
			</div>
			
			<div className={s.dialogs_dialog}>
				
			</div>
		</div>
	</div>;
}
export default Dialogs;
