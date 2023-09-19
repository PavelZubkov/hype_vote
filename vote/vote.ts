namespace $ {

	export class $hype_vote_vote extends $hyoo_crowd_struct {

		@ $mol_mem
		person() {
			const [id] = [...this.land.authors().values()]
			return id ? this.world()?.Fund( $hype_vote_person ).Item( id ) : null
		}

		@ $mol_mem
		moment() {
			return new $mol_time_moment(this.land.last_stamp())
		}

		@ $mol_mem
		point( next?: $hype_vote_point ) {
			const str = this.sub( 'point' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hype_vote_point ).Item( id ) : null
		}

	}

}
