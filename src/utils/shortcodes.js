import shortcode from 'shortcode-parser';

const ShortcodeParser = ( data ) => {

    shortcode.add('aa_tldr', function(buf, opts) {
        return '<div class="tldrContainer">' + buf + '</div>';
    });

    shortcode.add('table', function(buf, opts) {
        return '<div class="tableShortcode">' + JSON.stringify(opts) + buf + '</div>';
    });
    
    return shortcode.parse(data);
}

export default ShortcodeParser;