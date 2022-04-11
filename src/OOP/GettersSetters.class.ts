export default class GettersSetters {
    private staff: string[] = []

    constructor(private readonly name: string) {}

    set newStaffMember(staff_member: string) {
        if(!staff_member) throw new Error('Invalid Input. Try Againn.');
        
        this.addStaff(staff_member);
    }

    get retrieveStaff(): string[] {
        if (!this.staff.length) throw new Error('No person listed yet.');
        return this.staff;
    }

    private addStaff(this: GettersSetters, staff_name: string) {
        this.staff.push(staff_name);
    }
}

// const ttt = new GettersSetters('Guilherme');
// ttt.newStaffMember = 'Gaymen';
// ttt.newStaffMember = 'Boiolamen';
// console.log(ttt.retrieveStaff);
