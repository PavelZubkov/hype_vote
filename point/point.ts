namespace $ {

	export class $hype_vote_point extends $hyoo_crowd_struct {

		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		image_link( next?: string ) {
			return this.sub( 'image_link', $hyoo_crowd_reg ).str( next )
		}

	}

}
