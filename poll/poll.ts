namespace $ {

	export class $hype_vote_poll extends $hyoo_crowd_struct {
		
		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		owner() {
			const id = this.land.peer_id()
			return id ? this.world()?.Fund( $hype_vote_person ).Item( id ) : null
		}
		
		@ $mol_mem
		points_node() {
			return this.sub( 'points', $hyoo_crowd_list ) 
		}

		@ $mol_mem
		points() {
			return this.points_node().nodes( $hype_vote_point )
		}

		@ $mol_action
		point_add() {
			this.sub( 'points', $hyoo_crowd_list ).insert([ {} ])
			const obj = this.points().slice( -1 )[0]
			return obj
		}
		
		@ $mol_action
		point_drop( obj: $hype_vote_point ) {
			const index = this.points().map(obj => obj.id()).indexOf( obj.id() )
			this.sub( 'points', $hyoo_crowd_list ).cut( index )
		}

		@ $mol_mem
		votes_node() {
			return this.yoke( 'votes', $hyoo_crowd_list, [], [], ['0_0'] )! 
		}

		@ $mol_mem
		votes() {
			return this.votes_node().nodes( $hype_vote_vote )
		}

		@ $mol_action
		vote_add(point: $hype_vote_point) {
			this.sub( 'votes', $hyoo_crowd_list ).insert([ {} ])
			const obj = this.votes().slice( -1 )[0]
			obj.point(point)		
			return obj
		}

		@ $mol_mem
		turn_ons_node() {
			return this.sub( 'turn_ons', $hyoo_crowd_list )
		}

		@ $mol_mem
		turn_ons() {
			return this.turn_ons_node().list().map(str => new $mol_time_moment(str as string))
		}

		@ $mol_action
		turn_on() {
			this.turn_ons_node().add( new $mol_time_moment().toString() )
		}

		@ $mol_mem_key
		vote_count(point: $hype_vote_point) {
			return 1
		}
		
	}
	
}
