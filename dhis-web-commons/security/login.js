
var login = {};
login.localeKey = "dhis2.locale.ui";

$( document ).ready( function() 
{
    $( '#j_username' ).focus();

    var checked = document.getElementById( '2fa' ).checked;
		document.getElementById( '2fa-code-control' ).classList.add('is-hidden');

    $( '#2fa' ).click( function () {
        $( '#2fa_code' ).attr("hidden", checked);
        $( '#2fa_code' ).attr("readonly", checked);
        document.getElementById( '2fa' ).checked = !checked;
				
				document.getElementById( '2fa-code-control' ).classList.toggle('is-hidden');
        checked = !checked;
    });

    $( '#loginForm').bind( 'submit', function() 
    {
		if ( window.location.hash )
		{	
			$(this).prop('action', $(this).prop('action') + window.location.hash );
		}
		
			$( '#submit' ).attr( 'disabled', 'disabled' );

			sessionStorage.removeItem( 'ouSelected' );
			sessionStorage.removeItem( 'USER_PROFILE' );
			sessionStorage.removeItem( 'USER_SETTING' );
			sessionStorage.removeItem( 'eventCaptureGridColumns');
			sessionStorage.removeItem( 'trackerCaptureGridColumns');
			sessionStorage.removeItem( 'trackerCaptureCategoryOptions');
			sessionStorage.removeItem( 'eventCaptureCategoryOptions');
    } );
    
    var locale = localStorage[login.localeKey];
    
    if ( undefined !== locale && locale )
    {
    	login.changeLocale( locale );
    	$( '#localeSelect option[value="' + locale + '"]' ).attr( 'selected', 'selected' );
    }
} );

login.localeChanged = function()
{
	var locale = $( '#localeSelect :selected' ).val();
	
	if ( locale )
	{
		login.changeLocale( locale );
		localStorage[login.localeKey] = locale;
	}
}

login.changeLocale = function( locale )
{	
	$.get( 'loginStrings.action?keyApplication=Y&loc=' + locale, function( json ) {
		$( '#createAccountButton' ).html( json.create_an_account );
		$( '#signInLabel' ).html( json.sign_in );
		$( 'label[for="j_username"]' ).html( json.login_username );
		$( 'label[for="j_password"]' ).html( json.login_password );
		$( '#2fa_code' ).attr( 'placeholder', json.login_code );
		$( '#forgotPasswordLink' ).html( json.forgot_password );
		$( '#createAccountLink' ).html( json.create_an_account );
		$( '#loginMessage' ).html( json.wrong_username_or_password );
		$( '#poweredByLabel' ).html( json.powered_by );
		$( '#submit' ).val( json.sign_in );
		
		$( '#titleArea' ).html( json.applicationTitle );		
		$( '#introArea' ).html( json.keyApplicationIntro );
		$( '#notificationArea' ).html( json.keyApplicationNotification );
		$( '#applicationFooter' ).html( json.keyApplicationFooter );
		$( '#applicationRightFooter' ).html( json.keyApplicationRightFooter );
	} );
}

