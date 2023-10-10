public with sharing class LeaveRequestSampleData {
    public static void createData(){
        Id currentUserId=UserInfo.getUserId();
        List<LeaveRequest__c> leaves=new List<LeaveRequest__c>();
        leaves.Add(new LeaveRequest__c(User__c=currentUserId,From_Date__c=Date.newInstance(2023, 09, 24),To_Date__c=Date.newInstance(2023, 09, 27),Reason__c='For personal reason',Status__c='Approved'));
        leaves.Add(new LeaveRequest__c(User__c=currentUserId,From_Date__c=Date.newInstance(2023, 09, 25),To_Date__c=Date.newInstance(2023, 09, 30),Reason__c='Test',Status__c='Pending'));
        leaves.Add(new LeaveRequest__c(User__c=currentUserId,From_Date__c=Date.newInstance(2023, 09, 26),To_Date__c=Date.newInstance(2023, 03, 28),Reason__c='For personal reason',Status__c='Rejected'));

        insert leaves;
    }
}
