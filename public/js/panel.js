var io = io('http://' + ip + ':' + port + '/')
function loadMatch(data) {
	loadTeams(teams => {
		$teamList = $('#team_1, #team_2, #team_3, #team_4, #team_5, #team_6')
		$teamList.html(
			"<option value=null>NONE</option><option value='auto' selected>Try to match team automatically</option>"
		)

		teams.forEach(function (team, id) {
			let $option = $(
				"<option value='" +
					team._id +
					"'>" +
					team.team_name +
					' (' +
					team.short_name +
					')</option>'
			)
			if (team.logo) {
				$option.attr('data-icon', '/storage/' + team.logo)
			}
			$teamList.append($option)
		}, this)
		if (data) {
			$('#botype').val(data.match)
			$('#team_1_score').val('0').val(data.team_1.map_score)
			$('#team_2_score').val('0').val(data.team_2.map_score)
			$('#team_1').val('auto').val(data.team_1.team)
			$('#team_2').val('auto').val(data.team_2.team)
			$('#online_map').val('').val(data.map.online_map)
			$('#team_pick_map').val('').val(data.map.team_pick_map)
			$('.map_pick_1').val('').val(data.map.map_pick_1)
			$('.team_1_pick').val('').val(data.map.team_1_pick)
			$('.score_map_1').val('').val(data.map.score_map_1)
			$('.win_map_1').val('').val(data.map.win_map_1)
			$('.playing_1').val('').val(data.map.playing_1)
			$('.map_pick_2').val('').val(data.map.map_pick_2)
			$('.team_2_pick').val('').val(data.map.team_2_pick)
			$('.score_map_2').val('').val(data.map.score_map_2)
			$('.playing_2').val('').val(data.map.playing_2)
			$('.win_map_2').val('').val(data.map.win_map_2)
			$('.decider_map').val('').val(data.map.decider_map)
			$('.score_map_3').val('').val(data.map.score_map_3)
			$('.win_map_3').val('').val(data.map.win_map_3)
			$('.playing_3').val('').val(data.map.playing_3)
			$('#team_3').val('auto').val(data.team_3.team)
			$('#team_4').val('auto').val(data.team_4.team)
			$('#team_5').val('auto').val(data.team_5.team)
			$('#team_6').val('auto').val(data.team_6.team)
			$('#left_events').val('').val(data.map.left_events)
			$('#right_events').val('').val(data.map.right_events)
			$('#pick_map_team1').val('').val(data.map.pick_map_team1)
			$('#pick_map_team2').val('').val(data.map.pick_map_team2)
			$('#decider').val('').val(data.map.decider)
			$('#logo_champ').val('').val(data.map.logo_champ)
		}
		$('select').formSelect()
	})
}
$(document).ready(() => {
	$('#set').click(() => {
		let match = {
			match: $('#botype').val(),
			team_1: {
				map_score: $('#team_1_score').val(),
				team: $('#team_1').val(),
			},
			team_2: {
				map_score: $('#team_2_score').val(),
				team: $('#team_2').val(),
			},
			map: {
				online_map: $('#online_map').val(),
				team_pick_map: $('#team_pick_map').val(),
				map_pick_1: $('.map_pick_1').val(),
				team_1_pick: $('.team_1_pick').val(),
				score_map_1: $('.score_map_1').val(),
				win_map_1: $('.win_map_1').val(),
				playing_1: $('.playing_1').val(),
				map_pick_2: $('.map_pick_2').val(),
				team_2_pick: $('.team_2_pick').val(),
				score_map_2: $('.score_map_2').val(),
				playing_2: $('.playing_2').val(),
				win_map_2: $('.win_map_2').val(),
				decider_map: $('.decider_map').val(),
				score_map_3: $('.score_map_3').val(),
				win_map_3: $('.win_map_3').val(),
				playing_3: $('.playing_3').val(),
				left_events: $('#left_events').val(),
				right_events: $('#right_events').val(),
				pick_map_team1: $('#pick_map_team1').val(),
				pick_map_team2: $('#pick_map_team2').val(),
				decider: $('#decider').val(),
				logo_champ: $('#logo_champ').val(),
			},
			team_3: {
				team: $('#team_3').val(),
			},
			team_4: {
				team: $('#team_4').val(),
			},
			team_5: {
				team: $('#team_5').val(),
			},
			team_6: {
				team: $('#team_6').val(),
			},
		}
		io.emit('update_match', match)
	})
	$('#swap').click(() => {
		let match = {
			match: $('#botype').val(),
			team_2: {
				map_score: $('#team_1_score').val(),
				team: $('#team_1').val(),
			},
			team_1: {
				map_score: $('#team_2_score').val(),
				team: $('#team_2').val(),
			},
			team_3: {
				team: $('#team_3').val(),
			},
			team_4: {
				team: $('#team_4').val(),
			},
			team_5: {
				team: $('#team_5').val(),
			},
			team_6: {
				team: $('#team_6').val(),
			},
			map: {
				online_map: $('#online_map').val(),
				team_pick_map: $('#team_pick_map').val(),
				map_pick_1: $('.map_pick_1').val(),
				team_1_pick: $('.team_1_pick').val(),
				score_map_1: $('.score_map_1').val(),
				win_map_1: $('.win_map_1').val(),
				playing_1: $('.playing_1').val(),
				map_pick_2: $('.map_pick_2').val(),
				team_2_pick: $('.team_2_pick').val(),
				score_map_2: $('.score_map_2').val(),
				playing_2: $('.playing_2').val(),
				win_map_2: $('.win_map_2').val(),
				decider_map: $('.decider_map').val(),
				score_map_3: $('.score_map_3').val(),
				win_map_3: $('.win_map_3').val(),
				playing_3: $('.playing_3').val(),
				left_events: $('#left_events').val(),
				right_events: $('#right_events').val(),
				pick_map_team1: $('#pick_map_team1').val(),
				pick_map_team2: $('#pick_map_team2').val(),
				decider: $('#decider').val(),
				logo_champ: $('#logo_champ').val(),
			},
		}
		io.emit('update_match', match)
	})
	$('#ref').click(() => {
		io.emit('refresh', true)
	})
	io.on('match', loadMatch)
	loadMatch()
	io.emit('ready', true)
})
