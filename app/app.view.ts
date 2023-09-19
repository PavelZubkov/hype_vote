namespace $.$$ {
	export class $hype_vote_app extends $.$hype_vote_app {
		
		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		user() {
			return this.home().chief.yoke( '$hype_vote' , $hype_vote_person )!
		}

		@ $mol_mem
		poll_opened() {
			const str = this.$.$mol_state_arg.value( 'poll' )
			const id = $mol_int62_string_ensure(str)

			if (id) {
				const fund = this.yard().world().Fund( $hype_vote_poll )
				return fund.Item( id )
			}
		}

		poll_opened_name(next?: string) {
			return this.poll_opened()?.name(next) || ''
		}

		poll_opened_id() {
			return this.poll_opened()?.id() || ''
		}

		@ $mol_mem
		poll_voting() {
			const str = this.$.$mol_state_arg.value( 'voting' )
			const id = $mol_int62_string_ensure(str)

			if (id) {
				const fund = this.yard().world().Fund( $hype_vote_poll )
				return fund.Item( id )
			}
		}

		poll_voting_name() {
			return this.poll_voting()?.name() || 'not found'
		}

		pages() {
			if (this.poll_voting()) {
				return [this.Voting_page()]
			}

			return [
				this.Polls_page(),	
				... this.poll_opened() ? [ this.Poll_page() ] : [],
			]
		}

		@ $mol_action
		poll_add() {
			const obj = this.user().poll_add()
			if (!this.poll_opened()) this.$.$mol_state_arg.value('poll', obj.id())
		}

		@ $mol_mem
		poll_list() {
			return this.user().polls().map(obj => this.Poll_link(obj))
		}

		poll_id(obj: $hype_vote_poll) {
			return obj.id()
		}

		poll_name(obj: $hype_vote_poll) {
			return obj.name() || this.poll_no_name()
		}

		@ $mol_action
		point_add() {
			this.poll_opened()?.point_add()
		}

		@ $mol_mem
		point_rows() {
			return this.poll_opened()?.points().map(obj => this.Point_card(obj)) ?? []
		}

		point_name(obj: $hype_vote_point, next?: string) {
			return obj.name(next)
		}

		point_image(obj: $hype_vote_point, next?: string) {
			return obj.image_link(next)
		}

		@ $mol_action
		point_drop(obj: $hype_vote_point) {
			this.poll_opened()?.point_drop(obj)
		}

		@ $mol_mem
		voting_points() {
			return this.poll_voting()?.points().map(obj => this.Voting_point(obj)) ?? []
		}

		voting_point_image(obj: $hype_vote_point) {
			return obj.image_link() ?? ''
		}

		voting_point_name(obj: $hype_vote_point) {
			return obj.name()
		}

		voting_point_count(obj: $hype_vote_point) {
			return this.poll_voting()?.vote_count(obj).toString() || '0'
		}
	
	}
}
