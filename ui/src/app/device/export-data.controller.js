/*
 * Copyright © 2016-2018 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*@ngInject*/
export default function ImportDialogController($scope, $mdDialog) {

    var vm = this;

    vm.cancel = cancel;
    vm.exportData = exportData;
    vm.dateStart =  new Date(2018, 4, 1);
    vm.dateEnd =  new Date(2018, 4, 30);

    function cancel() {
        $mdDialog.cancel();
    }

    function exportData() {
        $scope.theForm.$setPristine();
        let date = [vm.dateStart, vm.dateEnd]
        $mdDialog.hide(date);
    }
}
