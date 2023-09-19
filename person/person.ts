namespace $ {
	export class $hype_vote_person extends $hyoo_crowd_struct {
		
		@ $mol_mem
		polls_node() {
			return this.sub( 'polls', $hyoo_crowd_list )
		}

		@ $mol_mem
		poll_fund() {
			return this.world()!.Fund( $hype_vote_poll )
		}

		@ $mol_mem
		polls() {
			const ids = this.polls_node().list()
			return ids
				.map( id => $mol_int62_string_ensure( id ) )
				.filter( $mol_guard_defined )
				.map( id => this.poll_fund().Item( id! ) )
		}
		
		@ $mol_action
		poll_add() {
			const obj = this.poll_fund().make()
			this.polls_node().add( obj.land.id() )
			return obj
		}

		@ $mol_action
		poll_drop( obj: $hype_vote_poll ) {
			this.polls_node().drop( obj.land.id() )
		}
		
	}
}
