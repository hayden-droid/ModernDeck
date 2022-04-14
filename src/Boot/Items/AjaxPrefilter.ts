export const initAjaxPrefilter = () => {
	$.ajaxPrefilter((ajaxOptions) => {
		try {
			const url = new URL(ajaxOptions.url || '');
	
			if (!url.searchParams.has('include_entities')) {
				return;
			}
	
			ajaxOptions.url = ajaxOptions.url + "&ext=mediaStats,highlightedLabel,voiceInfo,superFollowMetadata&include_ext_has_nft_avatar=true"
		} catch (e) {
		  console.error(e)
		}
	});
}